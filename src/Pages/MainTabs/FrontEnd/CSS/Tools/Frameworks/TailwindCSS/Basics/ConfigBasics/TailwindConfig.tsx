import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TailwindConfig = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/ConfigBasics/TailwindConfig';

  return (
    <>
      <PageLayout>
        <PageTitle title="tailwind.config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TailwindConfig;
