import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Primitives = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/DataTypes/Primitives';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript - Primitive Data Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Primitives;