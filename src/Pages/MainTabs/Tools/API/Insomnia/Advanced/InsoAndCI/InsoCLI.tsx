import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
