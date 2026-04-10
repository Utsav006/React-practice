import React from "react";
function ReportCard() {
    //Step1: data(Array of objects)
    const students = [
        {id: 1, name: "Utsav Singh", marks: 97 },
        {id: 2, name: "Vishal Singh", marks: 92 },
        {id: 3, name: "Vimal", marks: 91 },
        {id: 4, name: "Jitesh", marks: 39 },
        {id: 5, name: "Doremon", marks: 12 },
        {id: 6, name: "Frank", marks: 80 },
        {id: 7, name: "Grace", marks: 95 },
        {id: 8, name: "Vipul", marks: 8 },
        {id: 9, name: "Rajesh Tiwari", marks: 30 },
        {id: 10, name: "Judy", marks: 91 }
    ]
    return (
        //Step2: Page Wrapper
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600 text-center">Student Report Card</h2>
                {/* Step3: Loop through data and display */}
                <ul>
                    {students.map((student) => (
                        <li key={student.id} className="flex justify-between items-center p-3 rounded>">
                            <div>
                                <span className="font-semibold text-gray-800">{student.name}</span>
                                {/* //step4: topperBadge */}
                                {student.marks >= 90 && (
                                    <span className="ml-2 px-2 py-1 text-xs font-bold text-white bg-green-500 rounded-full">(Topper)</span>
                                )}
                            </div>
                            {/* //Step5: conditional rendering for grade */}
                            <span className={`font-semibold ${student.marks >= 40 ? "text-green-600" : "text-red-600"}`}>
                                {student.marks >= 40 ? "Pass" : "Fail"}
                            </span>
                           
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ReportCard;
