import React from "react";

export default function ProfilePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white p-5">
      {/* Header */}
      <div className="w-full bg-white p-5 flex justify-between items-center border-b">
        <h4 className="text-2xl font-bold">ข้อมูลส่วนตัว</h4>
        {/* ปุ่ม Edit พร้อม Tooltip */}
        <div className="relative group flex items-center gap-3">
          {/* Tooltip */}
          <span className="text-lg text-yellow-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            แก้ไขข้อมูลส่วนตัว
          </span>
          <button className="flex p-3 rounded-full transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="container mx-auto p-5">
        {/* ข้อมูลพื้นฐาน */}
        <Section title="ข้อมูลพื้นฐาน">
          <div className="flex flex-col items-center md:flex-row gap-8">
            {/* รูปโปรไฟล์ */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <img
                className="w-48 h-48 rounded-full"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt="Profile"
              />
              <p className="font-semibold mt-4 text-center">รูปโปรไฟล์</p>
            </div>

            {/* ข้อมูลพื้นฐาน */}
            <div className="flex-grow flex flex-col gap-4">
              {/* ID Card */}
              <div>
                <label className="block font-medium text-gray-700">ID Card (รหัสบัตรประชาชน)</label>
                <div className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700 mt-1">
                  รหัสบัตรประชาชน ( แก้ไขไม่ได้ )
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium text-gray-700">Email (เมลสถาบัน)</label>
                <div className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700 mt-1">
                  อีเมลสถาบัน ( แก้ไขไม่ได้ )
                </div>
              </div>

              {/* Student ID */}
              <div>
                <label className="block font-medium text-gray-700">Student ID (รหัสนักศึกษา)</label>
                <div className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-700 mt-1">
                  รหัสนักศึกษา ( แก้ไขไม่ได้ )
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ข้อมูลนักศึกษา */}
        <Section title="ข้อมูลนักศึกษา">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProfileInput label="First Name (ชื่อ)" placeholder="ชื่อ" />
            <ProfileInput label="Last Name (นามสกุล)" placeholder="นามสกุล" />
            <ProfileInput label="Nickname (ชื่อเล่น)" placeholder="ชื่อเล่น" />
            <ProfileInput label="Position (ตำแหน่ง)" placeholder="ตำแหน่ง" />
            <ProfileInput label="Phone Number (เบอร์โทร)" placeholder="เบอร์โทร" />
            <ProfileInput label="Line ID" placeholder="Line ID" />
          </div>
        </Section>

        {/* ข้อมูลเพิ่มเติม */}
          <Section title="ข้อมูลเพิ่มเติม">
            <div className="flex flex-wrap gap-4">
              {/* Birth Date */}
              <div className="flex-1 min-w-[300px]">
                <label className="block font-medium text-gray-700">Birth Date (วัน/เดือน/ปีเกิด)</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 mt-1"
                />
              </div>

              {/* Blood Type */}
              <div className="flex-1 min-w-[300px]">
                <label className="block font-medium text-gray-700">Blood Type (กรุ๊ปเลือด)</label>
                <select
                  defaultValue=""
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 mt-1"
                >
                  <option value="" disabled>
                    เลือกกรุ๊ปเลือด
                  </option>
                  <option value="A">กรุ๊ป A</option>
                  <option value="B">กรุ๊ป B</option>
                  <option value="AB">กรุ๊ป AB</option>
                  <option value="O">กรุ๊ป O</option>
                </select>
              </div>
            </div>
          </Section>

        {/* ข้อมูลผู้ปกครอง */}
        <Section title="ข้อมูลผู้ปกครอง">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProfileInput label="Guardian First Name (ชื่อผู้ปกครอง)" placeholder="ชื่อผู้ปกครอง" />
            <ProfileInput label="Guardian Last Name (นามสกุลผู้ปกครอง)" placeholder="นามสกุลผู้ปกครอง" />
            <ProfileInput label="Guardian Phone (เบอร์โทรผู้ปกครอง)" placeholder="เบอร์โทรผู้ปกครอง" />
          </div>
        </Section>
      </div>
    </div>
  );
}

// Component สำหรับ Section
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="mb-6 border-b pb-6">
      <h5 className="text-lg font-semibold mb-4">{title}</h5>
      <div>{children}</div>
    </div>
  );
}

// Component สำหรับ Input Field
function ProfileInput({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}): JSX.Element {
  return (
    <div className="w-full">
      <label className="block font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 mt-1"
      />
    </div>
  );
}
