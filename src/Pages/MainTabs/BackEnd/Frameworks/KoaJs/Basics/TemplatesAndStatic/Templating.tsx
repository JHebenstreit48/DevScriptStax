import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
