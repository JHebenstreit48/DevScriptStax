import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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