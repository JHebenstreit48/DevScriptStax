import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModulesSyntax = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Modules/Syntax';

  return (
    <>
      <PageLayout>
        <PageTitle title="JavaScript Modules - Import/Export Syntax" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModulesSyntax;