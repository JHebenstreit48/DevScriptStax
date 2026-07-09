import PageLayout from '@components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplateLiterals = () => {
  const markdownFilePath = 'Languages/JavaScript/Basics/DataTypes/TemplateLiterals';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Data Types - Template Literals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplateLiterals;