"use client"
import { useEffect, useState } from 'react'

const useMousePosition = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const getMousePosition = (e: MouseEvent) => {
        setPosition({ x: e.pageX, y: e.pageY })
    }

    useEffect(() => {
        window.addEventListener("mousemove", getMousePosition);
        return () => {
            window.removeEventListener("mousemove", getMousePosition);
        }
    }, []);
    return position
}

export default useMousePosition