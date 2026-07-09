import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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