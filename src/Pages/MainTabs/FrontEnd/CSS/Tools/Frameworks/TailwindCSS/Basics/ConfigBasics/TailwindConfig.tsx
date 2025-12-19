import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TailwindConfig = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/ConfigBasics/TailwindConfig';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="tailwind.config" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TailwindConfig;
