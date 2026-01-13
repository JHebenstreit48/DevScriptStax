import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Jinja2 = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Flask/Basics/TemplatesAndStatic/Jinja2';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Jinja2" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Jinja2;
