import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InsoCLI = () => {
  const markdownFilePath = 'Tools/APITools/Insomnia/Advanced/InsoAndCI/InsoCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Inso CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InsoCLI;
