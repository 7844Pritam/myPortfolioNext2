import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceAndEducationView from "@/components/client-view/experience";
import Footer from "@/components/client-view/footer";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";

async function extractAllDatas(currentSection) {
  try {
    const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
      method: "GET",
      cache: "no-store", // Ensures fresh data is fetched every time
    });
    if (!res.ok) {
      throw new Error(
        `Error fetching ${currentSection} data: ${res.statusText}`
      );
    }
    const data = await res.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error extracting data:", error);
    return [];
  }
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    <div className="bg-[#cdf8fa]">
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={aboutSectionData.length ? aboutSectionData[0] : []}
      />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
      <Footer />
    </div>
  );
}
