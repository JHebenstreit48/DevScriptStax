import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ControlAndExpiry = () => {
  const markdownFilePath = 'BackEnd/APIs/Advanced/Caching/ControlAndExpiry';

  return (
    <>
      <PageLayout>
        <PageTitle title="Control & Expiry" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlAndExpiry;
