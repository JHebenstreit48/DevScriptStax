import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Basics = () => {
  const markdownFilePath = 'BackEnd/Databases/Firebase/Advanced/AdminSDK/Basics';

  return (
    <>
      <PageLayout>
        <PageTitle title="AdminSDK: Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;
