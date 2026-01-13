import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Tools = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/Documentation/Tools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Tools;
