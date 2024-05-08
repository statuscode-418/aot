import React from 'react';
import { faculty } from '../../constants/faculty.js';

const FacultyListComponent = () => {
    return (
        <div classname="p-10">
            <h1 className="text-6xl font-bold mb-12 text-center text-blue-900 mt-6">Faculty List</h1>
            <table className="w-11/12 mx-auto mb-[20px]">
                <thead className="justify-between">
                    <tr className="bg-blue-900">
                        <th className="lg:px-16 py-2 border-r border-gray-400">
                            <span className="text-gray-300">Name of the Faculty</span>
                        </th>
                        <th className="lg:px-16 py-2 border-r border-gray-400">
                            <span className="text-gray-300">Designation</span>
                        </th>
                        <th className="lg:px-16 py-2 border-r border-gray-400">
                            <span className="text-gray-300">Highest Qualification</span>
                        </th>
                        <th className="lg:px-16 py-2 border-r border-gray-400">
                            <span className="text-gray-300">Experience</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200 font-bold">
                    {faculty.map((facultyMember, index) => (
                        <tr className="bg-white border-4 border-gray-200" key={index}>
                            <td className="lg:px-16 py-2 text-center">{facultyMember.name}</td>
                            <td className="lg:px-16 py-2 text-center">{facultyMember.designation}</td>
                            <td className="lg:px-16 py-2 text-center">{facultyMember.qualification}</td>
                            <td className="lg:px-16 py-2 text-center">{facultyMember.experience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FacultyListComponent;