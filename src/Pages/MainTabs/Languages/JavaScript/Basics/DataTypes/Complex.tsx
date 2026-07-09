import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ComplexDataTypes = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/DataTypes/Complex';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript - Complex Data Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComplexDataTypes;