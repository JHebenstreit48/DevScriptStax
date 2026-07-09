import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Management = () => {
  const markdownFilePath = 'BackEnd/Databases/MongoDB/Intermediate/Indexes/Management';

  return (
    <>
      <PageLayout>
        <PageTitle title="Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Management;
