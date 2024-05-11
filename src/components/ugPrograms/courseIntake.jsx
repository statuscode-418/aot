import React from 'react';
import { courseDetails } from '../../constants/courseDetails.js';

const CourseIntakeTable = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <table className="w-1/2 divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Course
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Approved Intake
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {courseDetails.map((course, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{course.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{course.intake}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseIntakeTable;
