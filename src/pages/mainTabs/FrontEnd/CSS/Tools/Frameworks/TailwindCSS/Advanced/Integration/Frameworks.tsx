import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Frameworks = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Integration/Frameworks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Frameworks (React/Next)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Frameworks;
