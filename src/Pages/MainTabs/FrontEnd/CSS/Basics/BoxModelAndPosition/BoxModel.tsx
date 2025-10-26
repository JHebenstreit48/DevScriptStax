import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BoxModel = () => {
  const markdownFilePath = 'FrontEnd/CSS/Basics/BoxModelAndPosition/BoxModel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CSS Box Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BoxModel;