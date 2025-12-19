import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ButtonsAndForms = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Basics/Components/ButtonsAndForms';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Buttons & Forms" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ButtonsAndForms;
