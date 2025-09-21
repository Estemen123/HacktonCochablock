"use client";
import HomePage from "@/components/home";

const data = await fetch("api/getQuantityProd");

export default function App() {
    return (
        <div>
            <HomePage />
        </div>
    );
}
