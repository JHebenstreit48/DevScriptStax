import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Templating = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Basics/TemplatesAndStatic/Templating';

  return (
    <>
      <PageLayout>
        <PageTitle title="Templating (koa-views)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Templating;
