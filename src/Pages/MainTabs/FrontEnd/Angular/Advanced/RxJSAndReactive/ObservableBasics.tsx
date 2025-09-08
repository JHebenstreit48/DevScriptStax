import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import Notes from "@/Components/PageComponents/Notes/Notes";

const ObservableBasics = () => {
  const markdownFilePath =
    "FrontEndNotes/AngularNotes/Advanced/RxJSAndReactive/ObservableBasics";

  return (
    <>
      <PageLayout>
        <Header text="Observable Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObservableBasics;