import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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