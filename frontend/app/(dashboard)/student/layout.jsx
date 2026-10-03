import React from "react";
import StudentSidebar from "@/components/student/StudentSidebar";

export default function TeacherLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <StudentSidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}