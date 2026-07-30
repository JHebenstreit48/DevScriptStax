import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ContainerAndBreakpoints = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Layout/ContainerAndBreakpoints';

  return (
    <>
      <PageLayout>
        <PageTitle title="Container & Breakpoints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContainerAndBreakpoints;
