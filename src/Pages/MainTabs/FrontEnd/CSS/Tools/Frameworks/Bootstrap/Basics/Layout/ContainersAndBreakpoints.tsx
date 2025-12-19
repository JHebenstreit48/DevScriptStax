import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ContainersAndBreakpoints = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/Bootstrap/Basics/Layout/ContainersAndBreakpoints';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Containers & Breakpoints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ContainersAndBreakpoints;
