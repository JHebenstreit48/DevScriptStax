import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TemplateEngine = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Django/Basics/ViewsAndTemplates/TemplateEngine';

  return (
    <>
      <PageLayout>
        <PageTitle title="Template Engine" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TemplateEngine;
