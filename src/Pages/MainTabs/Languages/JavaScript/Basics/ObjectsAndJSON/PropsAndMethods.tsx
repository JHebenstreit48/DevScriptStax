import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PropsAndMethods = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/ObjectsAndJSON/PropsAndMethods';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript - Properties and Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PropsAndMethods;