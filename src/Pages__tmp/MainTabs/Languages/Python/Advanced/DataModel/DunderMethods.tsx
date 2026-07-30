import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DunderMethods = () => {
  const markdownFilePath = 'Languages/Python/Advanced/DataModel/DunderMethods';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dunder Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DunderMethods;
