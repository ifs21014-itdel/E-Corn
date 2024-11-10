// DetailDiskusi.jsx
import React from "react";
import { useParams } from "react-router-dom";

// Define and export DetailDiskusi component only once
export default function DetailDiskusi() {
    const { id } = useParams();

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Detail Diskusi {id}</h1>
            <p>Informasi dan komentar terkait diskusi ini akan ditampilkan di sini.</p>
        </div>
    );
}
