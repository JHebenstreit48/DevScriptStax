import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InsoCLI = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/InsoAndCI/InsoCLI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Inso CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InsoCLI;
