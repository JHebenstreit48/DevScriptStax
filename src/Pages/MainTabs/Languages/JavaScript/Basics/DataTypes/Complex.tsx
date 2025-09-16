import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ComplexDataTypes = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/DataTypes/Complex';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="JavaScript - Complex Data Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComplexDataTypes;