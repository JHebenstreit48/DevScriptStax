import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Jinja2 = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/TemplatesAndStatic/Jinja2';

  return (
    <>
      <PageLayout>
        <PageTitle title="Jinja2" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Jinja2;
