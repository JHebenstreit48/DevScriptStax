import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APIMode = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/API/APIMode';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Mode" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APIMode;
