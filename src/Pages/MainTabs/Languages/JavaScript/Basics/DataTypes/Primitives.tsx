import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Primitives = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/DataTypes/Primitives';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript - Primitive Data Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Primitives;