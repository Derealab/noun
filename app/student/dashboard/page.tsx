import { redirect } from "next/navigation";
import Link from "next/link";
import { logoutStudent } from "@/app/student/actions";
import { getStudentSession } from "@/lib/auth";

const MENU_ITEMS = [
  ["▦", "Dashboard"],
  ["♙", "My profile"],
  ["♧", "Enrolled courses"],
  ["▱", "Package"],
  ["♡", "Wishlist"],
  ["☆", "Reviews"],
  ["♧", "My quiz attempts"],
  ["⌁", "Order history"],
  ["?", "Question & answer"],
  ["▤", "Certificates"],
  ["≡", "Assignments"],
];

const STATS = [
  ["▣", "Enrolled courses", "1,200", "bg-cyan-100 text-cyan-500"],
  ["▤", "In progress courses", "500", "bg-purple-100 text-purple-500"],
  ["▥", "Finished courses", "700", "bg-indigo-100 text-indigo-500"],
  ["▧", "Fail course", "17", "bg-red-100 text-red-500"],
  ["✓", "Pass courses", "17", "bg-green-100 text-green-500"],
  ["✣", "Total quizzes", "$230.0", "bg-amber-100 text-amber-500"],
];

const BAR_HEIGHTS = [28, 44, 35, 18, 32, 24, 14];

export default async function StudentDashboardPage() {
  const session = await getStudentSession();
  if (!session) redirect("/student/login");

  return (
    <main className="min-h-screen bg-white text-[#343434]">
      <header className="border-b border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.07)]">
        <div className="flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          <Link href="/" aria-label="NOUN home"><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-xs font-bold text-primary">N</span></Link>
          <nav aria-label="Student navigation" className="hidden items-center gap-8 text-[11px] font-medium lg:gap-12 lg:text-xs sm:flex">
            <a className="text-amber-500" href="#dashboard">All Courses</a>
            <a className="hover:text-primary" href="#instructors">Instructors</a>
            <a className="hover:text-primary" href="#teach">Become A Teacher</a>
            <a className="hover:text-primary" href="#profile">Profile</a>
            <a className="hover:text-primary" href="#checkout">Checkout</a>
          </nav>
          <form action={logoutStudent}><button type="submit" className="text-xs font-semibold text-gray-500 hover:text-primary">Sign out</button></form>
        </div>
      </header>

      <div className="w-full px-5 pb-8 pt-5 sm:px-8 sm:pt-6 lg:px-12 xl:px-16">
        <section className="relative h-32 overflow-hidden bg-[radial-gradient(circle_at_25%_20%,#f6d9fa,transparent_38%),radial-gradient(circle_at_75%_70%,#dfe8ff,transparent_48%),#f4edff] sm:h-40 xl:h-48">
          <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(115deg,transparent_20%,#fff_21%,transparent_22%,transparent_66%,#fff_67%,transparent_68%)] [background-size:170px_100%]" />
          <button type="button" className="absolute bottom-0 right-0 bg-white/70 px-3 py-2 text-[10px] font-medium text-amber-500">＋ Edit Cover Image</button>
        </section>

        <section id="profile" className="flex flex-col gap-4 border-b border-gray-200 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-2">
          <div className="flex items-center gap-4">
            <div className="relative -mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d7b09d] text-xl font-semibold text-white ring-4 ring-white lg:h-16 lg:w-16 lg:text-2xl">{session.name.charAt(0)}</div>
            <div><h1 className="text-xl font-bold lg:text-2xl">{session.name}</h1><p className="mt-1 text-[10px] text-gray-500 lg:text-xs"><span className="text-amber-400">★★★★★</span> 4.8 <span className="text-gray-400">(280)</span></p></div>
          </div>
          <div className="flex gap-2 pl-[72px] sm:pl-0" aria-label="Social links"><span className="social-icon">f</span><span className="social-icon active">♪</span><span className="social-icon">◎</span><span className="social-icon">𝕏</span><span className="social-icon">▶</span></div>
        </section>

        <div className="mt-6 grid lg:grid-cols-[190px_1fr] xl:grid-cols-[220px_1fr]" id="dashboard">
          <aside className="overflow-x-auto border-b border-gray-200 lg:border-b-0 lg:border-r">
            <nav aria-label="Dashboard sections" className="flex min-w-max lg:block">
              {MENU_ITEMS.map(([icon, label], index) => <a key={label} href={index === 0 ? "#dashboard" : `#${label.toLowerCase().replaceAll(" ", "-")}`} className={`flex items-center gap-3 border-b border-transparent px-3 py-3 text-[11px] whitespace-nowrap transition hover:bg-gray-50 lg:px-4 lg:py-4 lg:text-xs ${index === 0 ? "bg-amber-400 font-semibold text-white hover:bg-amber-400" : "text-gray-600"}`}><span className="w-5 text-center text-sm lg:text-base">{icon}</span>{label}</a>)}
            </nav>
          </aside>

          <section className="min-w-0 px-0 pt-6 lg:pl-6 lg:pt-0 xl:pl-8">
            <div className="flex items-center justify-between"><h2 className="text-base font-bold lg:text-lg">Dashboard</h2><button type="button" className="border border-gray-200 px-4 py-2.5 text-[10px] text-gray-500 lg:text-xs">This week　⌄</button></div>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:gap-4">{STATS.map(([icon, label, value, color]) => <article key={label} className="flex items-center gap-3 bg-[#f7f7fb] px-4 py-4 lg:gap-4 lg:px-5 lg:py-5"><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg lg:h-11 lg:w-11 lg:text-xl ${color}`}>{icon}</span><div><p className="text-[10px] text-gray-500 lg:text-xs">{label}</p><p className="mt-1 text-base font-bold lg:text-lg">{value}</p></div></article>)}</div>
            <div className="mt-7 border-t border-gray-200 pt-6"><div className="flex items-center justify-between"><h2 className="text-base font-bold lg:text-lg">Time spent</h2><button type="button" className="border border-gray-200 px-4 py-2.5 text-[10px] text-gray-500 lg:text-xs">This week　⌄</button></div><div className="mt-4 grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(240px,0.32fr)]">
              <div className="bg-[#f7f7fb] px-4 pb-3 pt-5 lg:px-6"><div className="flex h-40 items-end justify-around gap-2 border-b border-gray-300 px-2 lg:h-52">{BAR_HEIGHTS.map((height, index) => <div key={index} className="flex h-full items-end gap-1.5"><span className="w-1.5 rounded-t bg-purple-300 lg:w-2" style={{ height: `${height * 2.5}px` }} /><span className="w-1.5 rounded-t bg-orange-200 lg:w-2" style={{ height: `${Math.max(10, height * (index % 2 ? 1.6 : 0.45))}px` }} /></div>)}</div><div className="mt-3 flex justify-around text-[9px] text-gray-500 lg:text-[10px]">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}</div></div>
              <div className="bg-[#f7f7fb] p-5 lg:p-6"><h2 className="text-base font-bold lg:text-lg">Performance</h2><div className="mx-auto mt-5 flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-green-500 text-center lg:h-40 lg:w-40"><div><p className="text-4xl font-bold text-green-500 lg:text-5xl">80%</p><p className="text-[9px] text-green-500 lg:text-[10px]">Performance</p></div></div><p className="mt-5 text-center text-[10px] text-gray-700 lg:text-xs">You did a great job!</p></div>
            </div></div>
          </section>
        </div>
        <footer className="mt-5 flex items-center justify-between border-t border-gray-200 pt-5 text-[10px] text-gray-500"><strong className="text-sm text-gray-700">NOUN</strong><span>Student ID: {session.studentId}</span></footer>
      </div>
    </main>
  );
}