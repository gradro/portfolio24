"use client"
import useMousePosition from "@/utils/useMousePosition";
import { useEffect, useRef } from "react";

const GradientMouseFollow = () => {

    // Get mouse position
    const mousePosition = useMousePosition()


    return (
        <style jsx global>{
            `
            :root {
                --posX: ${mousePosition.x}px;
                --posY: ${mousePosition.y}px;
            }  
            `
        }
        </style>
    )
}

export default GradientMouseFollow