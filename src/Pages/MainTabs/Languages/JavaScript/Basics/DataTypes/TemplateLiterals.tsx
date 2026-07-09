import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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