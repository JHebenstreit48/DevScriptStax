import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Certificates = () => {
  const markdownFilePath = 'Tools/APITools/Postman/Advanced/Security/Certificates';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Certificates" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Certificates;
