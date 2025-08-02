import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeIQ" },
    { name: "description", content: "Smarter resumes. Better careers" },
  ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])



  return <main>

    <Navbar />

    
    <section className="main-section">
      <div className="page-heading py-10">
        <h1>Turn Your Resume Into an Opportunity Magnet</h1>
        <h2>Review your submissions and check AI-powered feedback</h2>
      </div>

      {resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume)=>(
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>
  </main>;
}
