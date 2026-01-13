import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HeadElementS = () => {
  const markdownFilePath = 'FrontEnd/HTML/Intermediate/HeadAndMetadata/Head';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Head ElementS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HeadElementS;
