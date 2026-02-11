import { ProgramRepository } from "@/db/repositories/ProgramRepository"
import { EntityStatusProgram, Program } from "@/db/type"
import { useEffect, useState } from "react"

export const useProgram = () => {
    const[programs,setPrograms] = useState<Program[]>([])
    const[loading,setLoading] = useState<boolean>(true)

    const initFunction = async () => {
        setLoading(true)
        const items = await ProgramRepository.getAll()
        setPrograms(items);
        setLoading(false)
    }

    const createProgram = async (data: Omit<Program,'id'>) => {
        const programId = await ProgramRepository.create(data)
        await initFunction()
        return programId;
    }
    const deleteProgram = async (id: string) => {
        await ProgramRepository.delete(id)
        setPrograms(prev => prev.filter(el => el.id !== id))
    }
    const getOneProgram = async (id: string) => {
        const data = await ProgramRepository.getById(id)
        return data;
    }
    const updateProgram = async (id: string,data: Omit<Program,'id'>) => {
        await ProgramRepository.update(id,data)
        setPrograms(prev => prev.map(
            el => el.id === id ? {...el,...data} : el
        ))
    }
    const updateProgramStatus = async (id: string,status: EntityStatusProgram) => {
        await ProgramRepository.updateStatus(id,status)
        await initFunction()
    }

    useEffect(() => {
        initFunction()
    },[])


    return {
        programs,loading,
        createProgram,deleteProgram,updateProgram,getOneProgram,
        updateProgramStatus
    }


}