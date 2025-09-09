import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const TemplRenderOptim = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Advanced/ChangeDetection/TemplateRenderingOptim";

  return (
    <>
      <PageLayout>
        <Header text="Template Rendering" size="sm" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplRenderOptim;
