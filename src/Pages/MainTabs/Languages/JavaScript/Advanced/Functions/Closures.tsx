import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Closures = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Functions/Closures';

  return (
    <>
      <PageLayout>
        <PageTitle title="Closures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Closures;
