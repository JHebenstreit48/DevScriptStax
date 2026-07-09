import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Certificates = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Security/Certificates';

  return (
    <>
      <PageLayout>
        <PageTitle title="Certificates" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Certificates;
