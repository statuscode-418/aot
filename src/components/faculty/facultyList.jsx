import React from 'react';
import { faculty } from '../../constants/faculty.js'; // adjust the path as needed

const FacultyListComponent = () => {
    return (
        <table className="min-w-full table-auto p-4">
            <thead className="justify-between">
                <tr className="bg-blue-900">
                    <th className="px-16 py-2 border-r border-gray-400">
                        <span className="text-gray-300">Name of the Faculty</span>
                    </th>
                    <th className="px-16 py-2 border-r border-gray-400">
                        <span className="text-gray-300">Designation</span>
                    </th>
                    <th className="px-16 py-2 border-r border-gray-400">
                        <span className="text-gray-300">Highest Qualification</span>
                    </th>
                    <th className="px-16 py-2 border-r border-gray-400">
                        <span className="text-gray-300">Experience</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {faculty.map((facultyMember, index) => (
                    <tr className="bg-white border-4 border-gray-200" key={index}>
                        <td className="px-16 py-2 text-center">{facultyMember.name}</td>
                        <td className="px-16 py-2 text-center">{facultyMember.designation}</td>
                        <td className="px-16 py-2 text-center">{facultyMember.qualification}</td>
                        <td className="px-16 py-2 text-center">{facultyMember.experience}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default FacultyListComponent;