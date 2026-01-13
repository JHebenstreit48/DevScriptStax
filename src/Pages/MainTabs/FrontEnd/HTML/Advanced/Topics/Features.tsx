import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Features = () => {
  const markdownFilePath = 'FrontEnd/HTML/Advanced/Topics/HTML5Features';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="HTML5 Features" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Features;
